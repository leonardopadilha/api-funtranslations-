import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../Support/constants";
import * as requestMessage from "../request/requestMessage";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Enviando mensagem no endpoint errado e validando status 404", () => {
    context("quando envio mensagem para o endpoint errado", () => {
        it("então o status é 404", (done) => {
            request
                .post("/")
                .send(requestMessage.message("Validando retorno 404"))
                .end((err, res) => {
                    expect(res).to.has.status(404)
                    expect(res.body.error.message).to.contains("Not Found")
                    done();
                })
        })
    })
})