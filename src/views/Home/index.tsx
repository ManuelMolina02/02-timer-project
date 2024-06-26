import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer, StartCountdownButton, Separator, TaskInput, MinutesAmountInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label>Vou trabalhar em</label>
                    <TaskInput
                        id='task'
                        type="text"
                        placeholder="Dê um nome para o seu projeto"
                        list='taskSuggestion'
                    />
                    <datalist id='taskSuggestion'>
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                    </datalist>

                    <label> durante</label>
                    <MinutesAmountInput
                        id='minutesAmount'
                        type="number"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountdownButton type="submit">
                    <Play size={24} />
                    Começar
                </StartCountdownButton>

            </form>

        </HomeContainer >
    );
}