# Configuration Reference

Backend configuration is located in a specific file:

```bash
$ consent-manager-back/src/main/resources/application.properties
```

Most of the configuration elements can be override at startup by providing a command line alternative avoiding the need to recompile the component.

```bash
$ java -jar -Dquarkus.http.port=9999 ...
```

More tips and tricks about configuration can be found in the [quarkus documentation](https://quarkus.io/docs/config#overriding-properties-at-runtime)

## HTTP config options

The first part of the file allows you to set specific HTTP server configuration options such as ports, CORS, proxy header management.

```properties title="consent-manager-back/src/main/resources/application.properties"
quarkus.http.port=8087
quarkus.http.test-port=8083

quarkus.http.cors.origins=
quarkus.http.cors.methods=OPTIONS,GET,PUT,POST,DELETE
quarkus.http.cors.exposed-headers=Content-Disposition
quarkus.http.cors.access-control-max-age=24H

quarkus.http.proxy.proxy-address-forwarding=true
```

## Logging config options

Access logs can be generated to log all incoming REST requests on the API:

```properties title="consent-manager-back/src/main/resources/application.properties"
quarkus.http.access-log.enabled=true
quarkus.http.access-log.pattern=combined
quarkus.http.access-log.log-to-file=true
quarkus.http.access-log.rotate=true
```

## Authentication configuration

Authentication is configured with two types: OpenID-Connect and HTTP BasicAuth.

OIDC is used for human access and delegates all account management (creation, password lost, granting roles) to an external IdP: Keycloak. This could be changed to fit other needs (LDAP, Active Directory, ...) but should be considered as a standard. Keycloak can also act as an Identity Broker by allowing to build an identity federation with the integration of other external compliant IdPs (OIDS or SAML) or other sources of accounts (LDAP, Database, etc...).

HTTP BasicAuth is used for System API access only and uses specific keys that can be generated inside the application. You should NOT disable this type of authentication.

```properties title="consent-manager-back/src/main/resources/application.properties"
quarkus.http.auth.basic=true

quarkus.oidc.enabled=true
quarkus.oidc.auth-server-url=http://localhost:4285/auth/realms/FairAndSmart
quarkus.oidc.client-id=consent-manager
quarkus.oidc.authentication.scopes=profile,email,roles
```

## Datasource configuration

By default, the application stores all its data into an embedded database (H2) for convenience. If necessary, it is possible to change the database type. Quarkus documentation describes supported DBMS and specific [configuration options](https://quarkus.io/docs/datasource). You should have to add some maven dependency in order to have the driver included in the application for such modification.

```properties title="consent-manager-back/src/main/resources/application.properties"
quarkus.datasource.db-kind=h2
quarkus.datasource.jdbc.url=jdbc:h2:${consent.home}/db
quarkus.liquibase.migrate-at-start=false
quarkus.liquibase.database-change-log-lock-table-name=${consent.instance}_DATABASECHANGELOGLOCK
quarkus.liquibase.database-change-log-table-name=${consent.instance}_DATABASECHANGELOG
quarkus.hibernate-orm.physical-naming-strategy=com.fairandsmart.consent.common.orm.PrefixPhysicalNamingStrategy
```

## Outgoing SMTP Server

An outgoing SMTP can be configured easily by overriding some of the following options:

```properties title="consent-manager-back/src/main/resources/application.properties"
quarkus.mailer.from=consent-manager@fairandsmart.io
quarkus.mailer.host=localhost
quarkus.mailer.port=25
quarkus.mailer.start-tls=DISABLED
quarkus.mailer.login=DISABLED
quarkus.mailer.ssl=false
quarkus.mailer.mock=false
```

## Main config options

It is possible to set an instance name. That name allows you to have several instances running on the the same database. All tables will be prefixed using that instance name. Keep it uppercase.

The fixed language can be specified here and will be propagated to the frontend as the default model creation language. Once a language has been set, it is stored in the instance database and cannot be updated later without creating a new instance. Available languages are 'en' and 'fr'.

If the import-data option is set to true, some model samples will be imported at the start. Otherwise, the database will be kept empty. Samples models are imported at first start using the configured language.

The home folder config will host receipts and other files needed by the instance.

Public URL allows you to ensure that CORS will be correctly setup when backend runs behind a proxy.

```properties title="consent-manager-back/src/main/resources/application.properties"
# MainConfig
consent.instance.name=DEV
consent.instance.owner=dev
consent.instance.lang=fr
consent.instance.import-data=true
consent.instance.home=~/.consent-manager
consent.instance.public.url=http://localhost:4287
consent.instance.private-url=http://localhost:8087
consent.instance.processor=https://www.fairandsmart.com
consent.instance.secret=ThisIsASuperSecret
consent.instance.thintoken=true
consent.instance.transaction-validity=PT6H
```

## Support options

A support service is available online and allows the backend to check for the newest version periodically. For now, no data is sent to the support and only the latest version is checked. It is also possible to disable the support avoiding any communication with the central service.

```properties title="consent-manager-back/src/main/resources/application.properties"
# SupportServiceConfig
consent.support.enabled=true
consent.support.news=true
consent.support.bugs=true
consent.support.stats=true
quarkus.rest-client."com.fairandsmart.consent.support.RemoteSupportService".url=https://hub.fairandsmart.com/
quarkus.rest-client."com.fairandsmart.consent.support.RemoteSupportService".scope=javax.inject.Singleton
```

## Security

Security roles can be override using those options but in most cases, it won't be needed at all.

```properties title="consent-manager-back/src/main/resources/application.properties"
# SecurityConfig
consent.security.auth.unauthenticated=anonymous
consent.security.roles.admin=admin
consent.security.roles.operator=operator
consent.security.roles.api=api
```

## Serial config

Serial numbers can be customized. Internal serial management is based on a slot reservation in the DB avoiding too many serialized transactions and storage bottlenecks on this critical point. Slot size can be customized in case of very heavy load of the system. Also a specific serial prefix may allow you to distinguish different instances of serials (production or tests).

```properties title="consent-manager-back/src/main/resources/application.properties"
# SerialConfig
consent.serial.prefix=U
consent.serial.slot.capacity=100
consent.serial.slot.initial=0
```

## User page access configuration

A dedicated page can be made available to your end users and the content of this page can be restricted to some models only avoiding customers to be able to see everything. The public url to access this web page can also be customized if this page is deported to another application.

```properties title="consent-manager-back/src/main/resources/application.properties"
# ClientConfig
consent.client.user-page.enabled=false
consent.client.user-page.elements=processing.001,processing.002,processing.003,preference.001,preference.002,preference.003,preference.004
consent.client.user-page.public-url=http://localhost:4286/user/me
```