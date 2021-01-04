---
title: Configuration
permalink: /docs/configuration/
excerpt: "Detailed elements of configuration to consider when installing Right Consents"
last_modified_at: 2020-12-21
toc: true
---

The configuration of the whole composition is not available in a single place. Each component of the system holds a part of the configuration. Nevertheless, the bckend configuration is probably the most important as it concerns directly behaviour and functionnal aspects of the main part of the software.

## IdP (keycloak) configuration

The configuration of the IdP is available using the manager interface <http://localhost:4285/auth>.

You can find dedicated Keycloak documentation on the [product website](https://www.keycloak.org/docs/latest/server_admin/index.html)

## SMTP Server

//TODO

## Backend

Backend configuration is located in a specific file : 

```bash
$ consent-manager-back/src/main/resources/application.properties
```

All configuration elements can be override at startup by providing command line alternative avoiding recompiling the component. More tips and tricks about configuration can be found in the [quarkus documentation](https://quarkus.io/guides/config#overriding-properties-at-runtime) 

```bash
$ java -jar -Dquarkus.http.port=9999 ...
```

### HTTP & Common config options

First part of the file allows to set specific HTTP server configuration options like ports, CORS, proxy header management, and logs.

```properties
quarkus.http.port=8087
quarkus.http.test-port=8083

quarkus.http.cors.origins=
quarkus.http.cors.methods=OPTIONS,GET,PUT,POST,DELETE
quarkus.http.cors.exposed-headers=Content-Disposition
quarkus.http.cors.access-control-max-age=24H

quarkus.http.proxy.proxy-address-forwarding=true

quarkus.http.access-log.enabled=true
quarkus.http.access-log.pattern=combined
quarkus.http.access-log.log-to-file=true
quarkus.http.access-log.rotate=true
```

### Authentication configuration

Authentication is configured with two types : OpenID-Connect and HTTP BasicAuth. 

OIDC is used for human access and delegates all account management (creation, password lost, granting roles) to an external IdP : Keycloak. This could be changed to fit other needs (LDAP, Active Directory, ...) but should be considered as a standard. Keycloak can also acts as a Identity Broker by allowing to build a identity federation with integration of any other external compliant IdP (OIDS or SAML) or any other source of accounts (LDAP, Database, etc...).

HTTP BasicAuth is used for System API access only and uses specific keys that can be generated inside the application. You should NOT disable this type of authentication.

```properties
quarkus.http.auth.basic=true

quarkus.oidc.enabled=true
quarkus.oidc.auth-server-url=http://localhost:8080/auth/realms/FairAndSmart
quarkus.oidc.client-id=consent-manager
quarkus.oidc.authentication.scopes=profile,email,roles
```

### Datasource configation

By default, application stores all its data into an embedded database (H2) for convenience. If necessary, it is possible to change the database type. Quarkus documentation describes supported SGBD and specific [configuration options](https://quarkus.io/guides/datasource). You should have to add some maven dependency in order to have the driver included in the application for such modification. 

```properties
quarkus.datasource.db-kind=h2
quarkus.datasource.jdbc.url=jdbc:h2:~/.consent-manager/db
quarkus.liquibase.migrate-at-start=false
quarkus.liquibase.database-change-log-lock-table-name=${consent.instance}_DATABASECHANGELOGLOCK
quarkus.liquibase.database-change-log-table-name=${consent.instance}_DATABASECHANGELOG
quarkus.hibernate-orm.physical-naming-strategy=com.fairandsmart.consent.common.orm.PrefixPhysicalNamingStrategy
```

### Outgoing SMTP Server

An outgoing SMTP can be configured easily by overriding some of the following options :

```properties
quarkus.mailer.from=consent-manager@fairandsmart.io
quarkus.mailer.host=localhost
quarkus.mailer.port=25
quarkus.mailer.start-tls=DISABLED
quarkus.mailer.login=DISABLED
quarkus.mailer.ssl=false
quarkus.mailer.mock=false
```

### Main config options

It is possible to set an instance name. That name allows to have many instances running on the the same database. All tables will be prefixed using that instance name, keep it uppercase.

If the data.import option is set to true, some model samples will be imported at startup otherwise, database will be kept empty.

The home folder config will host receipts and other files needed by the instance. 

Public URL allows to ensure that CORS will be correctly setup when backend runs behind a proxy.

```properties
# MainConfig
consent.instance=DEV
consent.data.import=true
consent.home=~/.consent-manager
consent.public.url=http://localhost:8087
consent.processor=https://www.fairandsmart.com
consent.secret=ThisIsASuperSecret
consent.thintoken=true
```

### Support options

A support service is available online and allows the backend to check for newest version periodically. For now, no data is sent to the support and only the latest version is checked. It is also possible to disable the support avoiding any commnication with the central service.

```properties
# SupportServiceConfig
consent.support.enabled=true
consent.support.news=true
consent.support.bugs=true
consent.support.stats=true
consent.support.api/mp-rest/url=https://core.dev.env.fairandsmart.tech/api
consent.support.api/mp-rest/scope=javax.inject.Singleton
```

### Security

Security roles can be override using those options but in most of the cases, it won't be neeed at all.

```properties
# SecurityConfig
consent.security.auth.unauthenticated=anonymous
consent.security.roles.admin=admin
consent.security.roles.operator=operator
consent.security.roles.api=api
```

### External TSA

A Timestamp authority needs to be declared in order to get certified timestamp on consent receipt. This is optionnal.

```properties
# TsaConfig
consent.tsa.url=https://freetsa.org/tsr
consent.tsa.auth=false
consent.tsa.auth.username=user
consent.tsa.auth.password=password
```

### Serial config

Serial numbers can be customized. Internal serial management is based on a slot reservation in the DB avoiding too many serialized transaction and storage bottleneck on this critical point. Slot size can be customized in case of very heavy load of the system. Also a specific serial prefix may allow to distinguish different instances of serials (production or tests).

```properties
# SerialConfig
consent.serial.prefix=U
consent.serial.slot.capacity=100
consent.serial.slot.initial=0
```

### Client access page configuration

A specific client page can be enabled and content of this page can be restricted to some models only avoiding customers to be able to see everything. The public url to access this web page can also be customized if this page is deported in another application.

```properties
# ClientConfig
consent.client.user-page.enabled=true
consent.client.user-page.elements=Core.1,Market.1,Channel.1,Frequency.1,Mode.1,Username.1,cgu.1
consent.client.user-page.public-url=http://localhost:4200/user/me
```

## Backoffice web application

//TODO