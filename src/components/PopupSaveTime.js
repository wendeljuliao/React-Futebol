import React from 'react';



export default function PopupSaveTime() {

    const [time, setTime] = useState('')
    const [dataCriacao, setDataCriacao] = useState('')

    return (
        <form onSubmit={() => salvarTime()}>
            <label>Nome do Time</label>
            <input type="text" id="id_Time" name="n_Time"
                value={time}
                onChange={(e) => setTime(e.target.value)} />
            <label>Data de criação do Time</label>
            <input type="text" id="id_dataCriacao" name="n_dataCriacao"
                value={dataCriacao}
                onChange={(e) => setDataCriacao(e.target.value)} />


            <input type="submit" value="Cadastrar Time" className="login"

                onClick={(e) => { }} />
        </form>
    )
}