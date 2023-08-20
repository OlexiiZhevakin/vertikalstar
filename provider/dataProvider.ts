// import {
//   GET_LIST,
//   GET_ONE,
//   CREATE,
//   UPDATE,
//   DELETE,
//   fetchUtils,
// } from "react-admin";



// const apiUrl = "https://www.vertikalstar.com/admin-data"; // Путь к папке с JSON файлами

// const dataProvider = (type: any, resource: any, params: any) => {
//   const url = `${apiUrl}/${resource}.json`;
//   const options = {
//     headers: new Headers({ Accept: "application/json" }),
//   };

//   switch (type) {
//     case GET_LIST:
//       return fetchUtils.fetchJson(url, options).then(({ json }) => ({
//         data: json,
//         total: json.length, // добавляем общее количество записей
//       }));

//     case GET_ONE:
//       return fetchUtils.fetchJson(`${url}?id=${params.id}`, options).then(({ json }) => ({
//         data: {
//           ...json,
//           id: params.id, // добавляем ключ id в объект данных
//         },
//       }));


//     case CREATE:
//       return fetchUtils.fetchJson(url, {
//         ...options,
//         method: "POST",
//         body: JSON.stringify(params.data),
//       }).then(({ json }) => ({ data: json }));

//     case UPDATE:
//       return fetchUtils.fetchJson(`${url}?id=${params.id}`, {
//         ...options,
//         method: "POST", // Измените метод на POST
//         body: JSON.stringify(params.data),
//       }).then(({ json }) => ({ data: json }));

//     case DELETE:
//       return fetchUtils.fetchJson(`${url}?id=${params.id}`, {
//         ...options,
//         method: "DELETE",
//       }).then(({ json }) => ({ data: json }));

//     default:
//       throw new Error(`Unsupported data provider request type ${type}`);
//   }
// };

// export default dataProvider;
// dataProvider.js
// dataProvider.js
// const { GET_LIST, GET_ONE, CREATE, UPDATE, DELETE } = require('react-admin');
// const db = require('@/db');

// export const dataProvider = {
//   [GET_LIST]: async (resource: string, params: any) => {
//     const query = `SELECT * FROM ${resource}`;
//     try {
//       const results = await db.promise().query(query);
//       return { data: results[0] };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   },
//   [GET_ONE]: async (resource: string, params: any) => {
//     const query = `SELECT * FROM ${resource} WHERE id = ?`;
//     try {
//       const results = await db.promise().query(query, [params.id]);
//       return { data: results[0][0] };
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       throw error;
//     }
//   },
//   [CREATE]: async (resource: string, params: any) => {
//     const query = `INSERT INTO ${resource} SET ?`;
//     try {
//       const [result] = await db.promise().query(query, params.data);
//       return { data: { ...params.data, id: result.insertId } };
//     } catch (error) {
//       console.error('Error creating data:', error);
//       throw error;
//     }
//   },
//   [UPDATE]: async (resource: string, params: any) => {
//     const query = `UPDATE ${resource} SET ? WHERE id = ?`;
//     try {
//       await db.promise().query(query, [params.data, params.id]);
//       return { data: params.data };
//     } catch (error) {
//       console.error('Error updating data:', error);
//       throw error;
//     }
//   },
//   [DELETE]: async (resource: string, params: any) => {
//     const query = `DELETE FROM ${resource} WHERE id = ?`;
//     try {
//       await db.promise().query(query, [params.id]);
//       return { data: params.previousData };
//     } catch (error) {
//       console.error('Error deleting data:', error);
//       throw error;
//     }
//   },
// };

// module.exports = dataProvider;


