const db = ({ postgres }) => {
    return Object.freeze({
        selectAllColleges,
        selectAllRequestTypes,
        addTransaction,
        selectAllTransactions,
        assignEngineer,
        updateRemarks,
        assignWorker,
        doneTransaction
    });

    async function selectAllColleges() {
        const db = await postgres();
        const sql = `select * from colleges`;
        return db.query(sql);
      }

      async function selectAllTransactions() {
        const db = await postgres();
        const sql = `select a.id, a.date_requested, a.status, a.request_description, c.description as college, b.description as request_type, a.engineer_remarks,
        (select bb.last_name || ', ' || bb.first_name from accounts aa
        left join master_data bb on aa.user_id = bb.id where aa.id = a.requester_id) as requester_name, a.date_completed,
        (select bb.last_name || ', ' || bb.first_name from accounts aa
        left join master_data bb on aa.user_id = bb.id where aa.id = a.engineer_id) as engineer,
        (select bb.last_name || ', ' || bb.first_name from accounts aa
        left join master_data bb on aa.user_id = bb.id where aa.id = a.worker_id) as worker
        from transactions a 
        left join request_types b on a.request_type_id = b.id
        left join colleges c on a.location_id = c.id`;
        return db.query(sql);
      }

      async function selectAllRequestTypes() {
        const db = await postgres();
        const sql = `select * from request_types`;
        return db.query(sql);
      }

      async function addTransaction(info) {
        const db = await postgres();
        const sql = `insert into transactions(date_requested, requester_id, status, request_type_id, location_id, request_description)
        values($1,$2,$3,$4,$5,$6)`;
        const params = [info.date_requested, info.requester_id, info.status, info.request_type_id,  info.location_id, info.request_description];
        return db.query(sql, params);
      }

      async function assignEngineer(info) {
        const db = await postgres();
        const sql = `update transactions set status = $1, engineer_id = $2 where id = $3`;
        const params = [info.status, info.engineer_id, info.id];
        return db.query(sql, params);
      }
      async function assignWorker(info) {
        const db = await postgres();
        const sql = `update transactions set status = $1, worker_id = $2 where id = $3`;
        const params = [info.status, info.worker_id, info.id];
        return db.query(sql, params);
      }

      async function updateRemarks(info) {
        const db = await postgres();
        const sql = `update transactions set engineer_remarks = $1, status = $2 where id = $3`;
        const params = [info.engineer_remarks, info.status, info.id];
        return db.query(sql, params);
      }

      async function doneTransaction(info) {
        const db = await postgres();
        const sql = `update transactions set date_completed = $1, status = $2 where id = $3`;
        const params = [info.date_completed, info.status, info.id];
        return db.query(sql, params);
      }
   
  };
  
  module.exports = db;