import React from 'react';

const Navbar = ({account, connectWallet, loading}) => {
  return (
    <div>
      <nav className="top-bar-nav navbar navbar-expand-lg navbar">
        <div className="logo">
            <a className="navbar-brand" href="#">
              {/* <img src="https://cryptologos.cc/logos/uniswap-uni-logo.png"alt="" /> */}
            </a>
        </div>
        <div className="center">
            <ul className="nav nav-pills mb-4" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="pills-swap-tab" data-toggle="pill" href="#pills-swap" role="tab"
                        aria-controls="pills-swap" aria-selected="true">Swap</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link" id="pills-pool-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">Pool</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" id="pills-vote-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">Vote</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-chart-tab" data-toggle="pill" href="#" role="tab" aria-selected="false">Chart</a>
                </li> */}
            </ul>
        </div>
        <div className="right">
          {account == null ? (
            <button className='btn btn-dark' onClick={connectWallet}>
              {loading ? (
                <span>
                  <span
                    className='spinner-border spinner-border-sm me-2'
                    role='status'
                    aria-hidden='true'
                  ></span>
                  <span>Connecting..</span>
                </span>
              ) : (
                <span>Connect Wallet</span>
              )}
            </button>
          ) : (
            <button type="button" className="btn btn-outline-dark" disabled>{account.slice(0, 7) + '....' + account.slice(34, 42)}</button>
          )}
            {/* <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="eth-button dropdown show">
                <a class="ethereum-coin btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>
                      <img src="./img/eth.png"
                            alt="" /></span>
                    Ethereum
                </a>
            </div>
            <div class="top-connect">
              <button type="button" class="btn-wallet" id="top-connect-wallet-button">
                Connect Wallet
              </button>
            </div>
            <div>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="ethereum-coin1 dropdown show">
                    <a class="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"><span>...</span>

                    </a>
                </div>
            </div> */}
        </div>
      </nav>
      {/* <nav className='navbar navbar-expand-lg navbar-expand-md navbar-light'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/home'>
            DexAggregator
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              
            </ul>
           
            {account == null ? (
        <button className='btn btn-dark' onClick={connectWallet}>
          {loading ? (
            <span>
              <span
                className='spinner-border spinner-border-sm me-2'
                role='status'
                aria-hidden='true'
              ></span>
              <span>Connecting..</span>
            </span>
          ) : (
            <span>Connect Wallet</span>
          )}
        </button>
      ) : (
        <button type="button" className="btn btn-outline-dark" disabled>{account.slice(0, 7) + '....' + account.slice(34, 42)}</button>
      )}
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;