// scripts/test-db.ts

import { PosgresDBUtil } from '../utils/db.util/PosgresDBUtil';

(async () => {
  const dbUtil = new PosgresDBUtil();
  const connection = await dbUtil.connect('Stage'); // or 'INT', depending on your env
  if (connection) {
    console.log('✅ DB Connection successful.');
    dbUtil.closeDBConnection(); // no argument needed
  } else {
    console.error('❌ Failed to connect to the DB.');
  }
})();
