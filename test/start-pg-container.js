const { GenericContainer, Wait } = require('testcontainers');
const { Duration, TemporalUnit } = require('node-duration');

module.exports = async function() {
    const pgPort = 5432;
    const container = await new GenericContainer('postgres', '12')
        .withEnv('POSTGRES_PASSWORD', 'pw')
        .withHealthCheck({
            test: "pg_isready",
            interval: new Duration(1, TemporalUnit.SECONDS),
            timeout: new Duration(3, TemporalUnit.SECONDS),
            retries: 5,
            startPeriod: new Duration(1, TemporalUnit.SECONDS)
        })
        .withWaitStrategy(Wait.forHealthCheck())
        .withExposedPorts(pgPort)
        .start();

    const port = container.getMappedPort(pgPort);

    container.getPort = () => port;
    return container;
}