import React, {lazy, Suspense} from 'react'

const ContatosLojas = lazy(()=>import('../../components/contatos'))

export default function Contatos () {
    return (
        <>
        <h1>Contatos</h1>
        <br/>
        <Suspense fallback={<p>Carregando...</p>}>
        <ContatosLojas/>
        </Suspense>
        </>
    )
}
