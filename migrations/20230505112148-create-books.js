import {CREATE_TABLE_SQL} from '../src/lib/schema'

exports.up = async (db) => {
  await await db.runSql(CREATE_TABLE_SQL)
  // return null;
};

