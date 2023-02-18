import React from "react";
import Card from 'react-bootstrap/Card';
import metamask from '../../assets/wallets/metamask.png'
import bitski from '../../assets/wallets/bitski.png'
import formatic from '../../assets/wallets/formatic.png'
import walletconnect from '../../assets/wallets/walletconnect.png'
import coinbase from '../../assets/wallets/coinbase.png'
import arkane from '../../assets/wallets/arkane.png'

import './walletcards.css'

export default function Walletcards() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        <Card className="walletbox">
                            <a href="#">
                                <Card.Img variant="top" src={metamask} />
                                <h4 className="text1">Metamask</h4>
                            </a>
                        </Card>
                    </div>

                    <div className=" col-md-2 col-sm-6 col-6 col-2">
                        <Card className="walletbox">
                            <a href="#">
                                <Card.Img variant="top" src={bitski} />
                                <h4 className="text1">Bitski</h4>
                            </a>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2 ">
                        <Card className="walletbox">
                            <a href="#">
                                <Card.Img variant="top" src={formatic} />
                                <h4 className="text1">Formatic</h4>
                            </a>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2 ">
                        <Card className="walletbox">
                            <a href="#">
                                <Card.Img variant="top" src={walletconnect} />
                                <h4 className="text1">WalletConnect</h4>
                            </a>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        <Card className="walletbox">
                            <a href="#">
                                <Card.Img variant="top" src={coinbase} />
                                <h4 className="text1">Coinbase Wallet</h4>
                            </a>
                        </Card>
                    </div>

                    <div className="col-md-2 col-sm-6 col-6 col-2">
                        <Card className="walletbox">
                            <a href="#">
                                <Card.Img variant="top" src={arkane} />
                                <h4 className="text1">Arkane</h4>
                            </a>
                        </Card>
                    </div>

                </div>
            </div>
        </>
    );
}