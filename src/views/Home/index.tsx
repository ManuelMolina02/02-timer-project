import { useForm } from 'react-hook-form'
import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer, StartCountdownButton, Separator, TaskInput, MinutesAmountInput } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

const newTaskFormValidaitonSchema = zod.object({
    task: zod.string().min(1, 'Insira um nome para tarefa.'),
    minutesAmount: zod.number()
        .min(5, 'Insira um valor maior ou igual a 5.')
        .max(60, 'Insira um valor menor ou igual a 60.')
});

type NewTaskFormData = zod.infer<typeof newTaskFormValidaitonSchema>;

export function Home() {
    // add formState to useForm, to get the form state
    // example of formState: formState.errors
    const { register, handleSubmit, watch, reset } = useForm<NewTaskFormData>({
        resolver: zodResolver(newTaskFormValidaitonSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    });

    const task = watch('task');
    const minutesAmount = watch('minutesAmount');

    const isSubmitDisabled = !task || !minutesAmount;

    function handleTasksFormSubmit(data: NewTaskFormData) {
        console.log(data);
        reset();
    }


    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleTasksFormSubmit)}>
                <FormContainer>
                    <label>Vou trabalhar em</label>
                    <TaskInput
                        id='task'
                        type="text"
                        placeholder="Dê um nome para o seu projeto"
                        list='taskSuggestion'
                        {...register('task')}
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
                        {...register('minutesAmount', { valueAsNumber: true })}
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

                <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                    <Play size={24} />
                    Começar
                </StartCountdownButton>
            </form>

        </HomeContainer >
    );
}