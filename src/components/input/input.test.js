import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Input } from './index.jsx';

/**
 *	@jest-enviroment jsdom
 */
test('render component', () => {

	const input = {
		type: 'text',
		label: 'input de prueba'
	}

	const component = render(<Input type={input.type} label={input.label} />)

	component.getByText('input de prueba')

})
