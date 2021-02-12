import React, {lazy, Suspense} from 'react'

const ProdutosLojas = lazy(()=>import('../../components/produtos'))

export default function Produtos () {
    return (
        <>
        <h2>Produtos</h2>
        <br/>
        <Suspense fallback={<p>Carregando...</p>}>
        <ProdutosLojas/>
        </Suspense>
        </>
    )
}