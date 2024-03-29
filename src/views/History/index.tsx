import { HistoryContainer, HistoryList, StatusHistory } from "./styles";

export function History() {
    return (
        <HistoryContainer>
            <h1>Meu Histórico</h1>

            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estudar</td>
                            <td>25:30 minutos</td>
                            <td>Há 2 meses</td>
                            <td><StatusHistory statusColor={"green"}>Concluído</StatusHistory></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>25:30 minutos</td>
                            <td>Há 2 meses</td>
                            <td><StatusHistory statusColor={"red"}>Interrompido</StatusHistory></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>25:30 minutos</td>
                            <td>Há 2 meses</td>
                            <td><StatusHistory statusColor={"gray"}>Pendente</StatusHistory></td>
                        </tr>
                        <tr>
                            <td>Estudar</td>
                            <td>25:30 minutos</td>
                            <td>Há 2 meses</td>
                            <td><StatusHistory statusColor={"yellow"}>Em Andamento</StatusHistory></td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    );
}