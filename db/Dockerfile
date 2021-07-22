
FROM postgres:12.2-alpine

USER postgres

EXPOSE 5432

VOLUME [ "../data/db1" ]

FROM library/postgres
COPY init.sql /docker-entrypoint-initdb.d/

FROM library/postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD docker
# ENV POSTGRES_DB docker
