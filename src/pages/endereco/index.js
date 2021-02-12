import React, {lazy, Suspense} from 'react'

//Code Splitting e Lazy Loading.
const EnderecoLojas = lazy(()=>import('../../components/endereco'))


export default function Endereco () {
    return (
        <>
        <h1>Endereços</h1>
        <br/>
        <Suspense fallback={<p>Carregando...</p>}>
        <EnderecoLojas/>
        </Suspense>
        </>
    )
}