const knex = require('knex');
const config = require('../../../knexfile');
const my_db = knex(config);
module.exports = class AppointmentRepository {
    constructor (){}
    // function to create appointment
    async createAppointment(appointment){
        // insert data in the appointment table in the database
        await my_db('appointment')
            .insert(appointment);
        // return message and appointment;
        return ['appointment created', appointment];

    }
    // function to get appointment by id
    async getById(id){
        //get appointment by id
        const appointment = await my_db('appointment')
            .where({appointmentId: id})
            .first()
        // return the data
        return appointment;
    }
    // function to update the data
    async updateAppointment(appointment){
        // update data using the appointment id
        await my_db('appointment')
            .where({appointmentId: appointment.appointmentId})
            .update(appointment);
        // return message and appointment;
        return ['appointment updated', appointment];
    }
    // function to delete the data
    async deleteAppointment(appointment){
        // delete data using the appointment id
        await my_db('appointment')
            .where({appointmentId: appointment.appointmentId})
            .del(appointment);
        // return message and appointment;
        return ['appointment deleted', appointment];
    }
    // function to get the appointment table
    async list(){
        // get the appointment table
        const appointment = await my_db('appointment')
            .select();
        return ['appointment list', appointment];
    }
    async listByUserId (userId){
        // get the appointment table where userId is similar
        const appointment = await my_db('appointment')
            .select()
            .where({userId : userId})
        return ['appointment list', appointment];
    }
}