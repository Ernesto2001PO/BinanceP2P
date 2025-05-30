import React from "react";
import Menu from "../components/Menu";

function Home() {
  return (
    <div>
      <Menu />
      <div className="container mt-4">
        <div className="text-center mb-4">
          <h2>Sencillo. Seguro. Binance</h2>
        </div>
        <div className="row text-center mb-4">
          <div className="col">
            <img src="../public/bitcoin-btc-logo.png" alt="BTC" width={32} />
            <div>
              BTC
              <br />
              <small>Bitcoin</small>
            </div>
            <div>105,349.37 $</div>
            <div className="text-success">+0,51 %</div>
          </div>
          <div className="col">
            <img src="../public/ethereum-eth-logo.png" alt="ETH" width={32} />
            <div>
              ETH
              <br />
              <small>Ethereum</small>
            </div>
            <div>2,483.94 $</div>
            <div className="text-success">+0,68 %</div>
          </div>
          <div className="col">
            <img src="../public/bnb-bnb-logo.png" alt="BNB" width={32} />
            <div>
              BNB
              <br />
              <small>BNB</small>
            </div>
            <div>644.95 $</div>
            <div className="text-danger">-0,05 %</div>
          </div>
          <div className="col">
            <img src="../public/xrp-xrp-logo.png" alt="XRP" width={32} />
            <div>
              XRP
              <br />
              <small>XRP</small>
            </div>
            <div>2.34 $</div>
            <div className="text-danger">-0,17 %</div>
          </div>
          <div className="col">
            <img src="../public/solana-sol-logo.png" alt="SOL" width={32} />
            <div>
              SOL
              <br />
              <small>Solana</small>
            </div>
            <div>166.80 $</div>
            <div className="text-success">+1,55 %</div>
          </div>
        </div>  
        <div className="mb-4">
          <h4>Noticias</h4>
          <ul>
            <li>
              La Fundación de Desarrollo Sei Nombra a Jamie Finn como Asesor
              Estratégico
            </li>
            <li>
              El mercado de criptomonedas experimenta $220 millones en
              liquidaciones en 24 horas
            </li>
            <li>
              El compromiso de los usuarios de ChatGPT experimenta un
              crecimiento significativo en el último año
            </li>
            <li>Bancor demanda a Uniswap por presunta infracción de patente</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4>Preguntas frecuentes</h4>
          <ol>
            <li>¿Qué es un exchange de criptomonedas?</li>
            <li>¿Qué productos ofrece Binance?</li>
            <li>Cómo comprar Bitcoin y otras criptomonedas en Binance</li>
            <li>
              Cómo hacer un seguimiento de los precios de las criptomonedas
            </li>
            <li>Cómo operar con criptomonedas en Binance</li>
            <li>Cómo percibir ganancias de criptomonedas en Binance</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
