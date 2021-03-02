import React from 'react'
import {
    BoxHeader,
    FeeBox,
    FeeContainer,
    FeeWrapper,
    BoxColumn,
    BoxWrapper,
    SubHeader,
    Lists,
    City
} from './FeeElements'

const FeeSection = () => {
    return (
        <>
            <FeeContainer>
                <FeeWrapper>
                    <FeeBox>
                        <BoxHeader>Biaya Pengiriman Barang</BoxHeader>
                        <BoxWrapper>
                            <BoxColumn>
                                <SubHeader>
                                    Rp. 22.000 ,-
                                </SubHeader>
                                <Lists>
                                    <City>Jabodetabek</City>
                                    <City>Bali</City>
                                    <City>Sumatera</City>
                                </Lists>
                            </BoxColumn>
                            <BoxColumn>
                                <SubHeader>
                                    Rp. 33.000 ,-
                                </SubHeader>
                                <Lists>
                                    <City>Kalimantan</City>
                                    <City>Sulawesi</City>
                                    <City>Maluku</City>
                                    <City>NTB</City>
                                    <City>NTT</City>
                                </Lists>
                            </BoxColumn>
                            <BoxColumn>
                                <SubHeader>
                                    Rp. 55.000 ,-
                                </SubHeader>
                                <Lists>
                                    <City>Kalimantan</City>
                                    <City>Sulawesi</City>
                                    <City>Maluku</City>
                                    <City>NTB</City>
                                    <City>NTT</City>
                                </Lists>
                            </BoxColumn>
                        </BoxWrapper>
                    </FeeBox>
                </FeeWrapper>
            </FeeContainer>
        </>
    )
}

export default FeeSection
