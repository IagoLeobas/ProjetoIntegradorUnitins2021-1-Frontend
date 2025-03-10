import React from 'react'
import { CardHeader, UnInput, UnInputDateTime, UnSelect } from '~/common/components'
import { Card, Container, Content, InputWrapper, UnForm } from '~/common/styles'
import { Button} from '~/primereact'

function RelatorioLanding() {
  const [groupOptions] = React.useState([
		{label: 'Recanto', value: 1},
		{label: 'Cargueiros', value: 2},
		{label: 'Brejão', value: 3},
		{label: 'Veredas', value: 4},
		{label: 'Itabinhas', value: 5}
	])
  const enviar = form => {
    // eslint-disable-next-line no-console
    console.log(form)
  }

  return (
  <Container className='p-d-flex'>
			<Content className='p-d-flex p-jc-center p-ai-center layout-content'>
				<Card className='p-fluid'>
					<CardHeader title='Relatório de Cooperado e Propriedade'/>
					<UnForm onSubmit={enviar}>
						<InputWrapper columns={2} gap='10px'>
							<UnInputDateTime name='inicio' label='Inicio'/>
							<UnInputDateTime name='fim' label='Fim'/>
						</InputWrapper>
						<UnSelect name='cooperado' label='Cooperado' options={groupOptions}/>
						<UnSelect name='tecnico' label='Técnico' options={groupOptions}/>
            <InputWrapper columns={2} gap='10px'>
						  <Button type='submit' label='Relatório Geral'/>
					    <Button type='submit' label='Relatório da Propriedade'/>
            </InputWrapper>
					</UnForm>
				</Card>
			</Content>
		</Container>
  )}

export default RelatorioLanding