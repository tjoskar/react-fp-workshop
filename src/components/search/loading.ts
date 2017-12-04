import { h3 } from 'react-hyperscript-helpers'
import { branch, renderComponent } from 'recompose'

const Loading = () => h3('Loading')

const isLoading = props => props.loading

export const ShowLoadingTextIfLoading = branch(isLoading, renderComponent(Loading))
