import chai from "chai";
import chaiHttp from "chai-http";
import * as constant from "../Support/constants";
import * as requestMessage from "../request/requestMessage";

chai.use(chaiHttp);
const expect = chai.expect;

const request = chai.request(constant.URL_API)

describe("Criar texto dos Minions", () => {
    context("Quando informo um texto para o endpoint dos minions", () => {
        it("então o texto é traduzido corretamente", (done) => {
            request
                .post(constant.MINION)
                .send(requestMessage.message("Testando API com Mocha e Chai"))
                .end((err, res) => {
                    expect(res).to.has.status(200)
                    expect(res.body).to.not.be.empty;
                    expect(res.body.contents.text).to.contains("Testando API com Mocha e Chai")
                    expect(res.body.contents.translation).to.equals("minion")
                    done();
                })
        })
    })
})