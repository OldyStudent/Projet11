import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AccommodationItem from './AccommodationItem';

describe('AccommodationItem Component Test Suite', () => {
    const id = "123";
    const title = "Maison";
    const cover = "photo-maison.jpg";

    it('Should render correctly the element', () => {
        render(
            <Router>
                <AccommodationItem id={id} title={title} cover={cover} />
            </Router>
        );

        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', `/detail?id=${id}`);

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();

        const imgElement = screen.getByRole('img');
        expect(imgElement).toHaveAttribute('src', cover);
        expect(imgElement).toHaveAttribute('alt', title);
    })

});