// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import dbmigrate from 'db-migrate'

const migrate = async () => {
  try {
      const [action, ...args] = process.argv.slice(2)
      const dbm = dbmigrate.getInstance(true, {
      env: 'default',
      config: {
          default: {
            driver: 'pg',
            connectionString: 'postgres://postgres:pw@localhost:5432/postgres'
          }
        }
      })
      await dbm[action](...args)
  } catch (err) {
      const { stack } = err as Error
      console.error(stack)
      process.exit(1)
  }
}

migrate()
