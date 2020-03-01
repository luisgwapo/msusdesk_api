const db = ({ postgres }) => {
    return Object.freeze({
        selectAllUsers,
        addAccount,
        selectUserById,
        selectAccountByEmail,
        selectAllAccounts,
        selectAllUsersWithNoAccount,
        selectAllRoles,
        updateAccountRole
    });
    async function selectAllUsers() {
        const db = await postgres();
        const sql = `select a.id, a.first_name, a.last_name, a.department_id, a.id_number , b.description as college_description, b.abbreviation as college_abbreviation, c.description as 
        department_description, c.abbreviation as department_abbreviation from master_data a 
        left join colleges b on a.college_id = b.id
        left join departments c on a.department_id = c.id`;
        return db.query(sql);
      }

      async function selectAllRoles() {
        const db = await postgres();
        const sql = `select * from roles`;
        return db.query(sql);
      }

      async function selectAllUsersWithNoAccount() {
        const db = await postgres();
        const sql = `select a.id, a.first_name, a.last_name, b.description as college_description, b.abbreviation as college_abbreviation, c.description as 
        department_description, c.abbreviation as department_abbreviation from master_data a 
        left join colleges b on a.college_id = b.id
        left join departments c on a.department_id = c.id
        left join accounts x on x.user_id = a.id
        where x.id is null`;
        return db.query(sql);
      }

      async function selectAllAccounts() {
        const db = await postgres();
        const sql = `select a.id, a.role_id, c.id_number, c.first_name, c.last_name, b.description, d.abbreviation as college, e.abbreviation as department from accounts a 
        left join roles b on a.role_id = b.id
        left join master_data c on a.user_id = c.id
        left join colleges d on c.college_id = d.id
        left join departments e on c.department_id = e.id`;
        return db.query(sql);
      }

      async function addAccount(info) {
        const db = await postgres();
        const sql = `INSERT INTO public.accounts(
            email, password, role_id, user_id)
           VALUES ($1, $2, $3, $4)`;
        const params = [info.email, info.password, info.role_id, info.user_id];
        return db.query(sql, params);
      }

      async function selectUserById(id) {
        const db = await postgres();
        const sql = `select a.id, a.first_name, a.last_name, a.department_id , a.id_number, b.description as college_description, b.abbreviation as college_abbreviation, c.description as 
        department_description, c.abbreviation as department_abbreviation from master_data a 
        left join colleges b on a.college_id = b.id
        left join departments c on a.department_id = c.id where a.id = $1`;
        const params = [id];
        return db.query(sql, params);
      }

      async function selectAccountByEmail(email) {
        const db = await postgres();
        const sql = `select a.*, b.description from accounts a
        left join roles b on a.role_id = b.id
        where email = $1`;
        const params = [email];
        return db.query(sql, params);
      }

      async function updateAccountRole(id, role_id) {
        const db = await postgres();
        const sql = `update accounts set role_id = $1 where id = $2`;
        const params = [role_id, id];
        return db.query(sql, params);
      }
   
  };
  
  module.exports = db;