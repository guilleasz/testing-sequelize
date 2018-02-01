const Student = require('../models');
const { expect } = require('chai');

describe('Model Student', () => {
  describe('Validations', () => {
    describe('property name', () => {
      it('should throw an error if not a string', (done) => {
        const student = Student.build({
          name: []  ,
        });
        student.validate()
          .then(() => done(new Error('Debería haber arrojado un error')))
          .catch(() => {
            done();
          });
      });
      it('should throw an errror if there is no name property', (done) => {
        const student =  Student.build({});
        student.validate()
          .then(() => {
            done(new Error('should been rejected'))
          })
          .catch(() => {
            done();
          })
      });
      it('should validate ok when name has a string', () => {
        const student = Student.build({
          name: 'Guille'
        });
        return student.validate();
      });
    })
    describe('camada', () => {
      it('should throw an error if it is not a string', (done) => {
        const student = Student.build({
          camada: [],
        });
        student.validate()
          .then(() => {
            done(new Error('should not have validate'))
          })
          .catch(() => {
            done();
          }) 
      });
    });
  })
})