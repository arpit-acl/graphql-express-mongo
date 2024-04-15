import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import '../src/index';
chai.use(chaiHttp);

const expect = chai.expect;

describe('GraphQL API', () => {
  it('should return data from GraphQL query', (done) => {
    chai
      .request('http://localhost:4000')
      .post('/graphql')
      .send({ query: '{ ping }' }) // Your GraphQL query
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.data).to.be.an('object');
        expect(res.body.data).to.have.property('ping');
        expect(res.body.data.ping).to.be.a('string');
        done();
      });
  });

  after('Exit Process' , () => {
    setTimeout(() => {
      process.exit(1)
    }, 2000)
    
  })
});
