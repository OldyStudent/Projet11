import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from "./Header";

describe('Header Component Test Suite', () => {

    it('Should display the Web site logo', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        const logoElement = screen.getByAltText('Logo Kaza');
        expect(logoElement).toBeInTheDocument();
    });

    it('Should display the navigation menu', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);

        const homeLinkElement = screen.getByText('Accueil');
        const aboutLinkElement = screen.getByText('A propos');

        expect(homeLinkElement).toBeInTheDocument();
        expect(aboutLinkElement).toBeInTheDocument();

        expect(homeLinkElement).toHaveAttribute('href', '/');
        expect(aboutLinkElement).toHaveAttribute('href', '/about');
    });

    it('Should redirect the user to the selected page when the link is clicked', async () => {
        render(<MemoryRouter><Header /></MemoryRouter>);

        const homeLinkElement = screen.getByText('Accueil');
        const aboutLinkElement = screen.getByText('A propos');

        fireEvent.click(aboutLinkElement);
        expect(aboutLinkElement).toHaveClass('active');

        fireEvent.click(homeLinkElement);
        expect(homeLinkElement).toHaveClass('active');
    });
})

