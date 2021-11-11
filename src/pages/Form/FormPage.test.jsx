import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import FormPage from "./FormPage";

describe('FormPage', () => {
    test('renders FormPage Component', () => {
        render(<FormPage />)
        // screen.debug()

        expect(screen.getByText('Formulir Buku Baru')).toBeInTheDocument();
        expect(screen.getByLabelText(/Judul/)).toBeInTheDocument();
        expect(screen.getByLabelText(/Pengarang/)).toBeInTheDocument();
    })

    test('input text for judul and pengarang', () => {
        render(<FormPage />)

        fireEvent.input(
            screen.getByRole('textbox', {name: /judul/i}),
            {target: {value: "Kamu, Aku, dan Kenangan"}}
        )

        fireEvent.input(
            screen.getByRole('textbox', {name: /pengarang/i}),
            {target: {value: "Wahyu"}}
        )

        expect(screen.getByLabelText(/Judul/)).toHaveValue("Kamu, Aku, dan Kenangan")
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Wahyu")
    })

    test('input text pengarang with number', () => {
        render(<FormPage />)

        fireEvent.input(
            screen.getByRole('textbox', {name: /pengarang/i}),
            {target: {value: "Wahyu13"}}
        )

        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("Wahyu13")
        expect(screen.getByText('Nama Pengarang Harus Berupa Huruf')).toBeInTheDocument()
    })

    test('submit button', () => {
        render(<FormPage />)

        fireEvent.click(screen.getByRole('button'))

        expect(screen.getByLabelText(/Judul/)).toHaveValue("")
        expect(screen.getByLabelText(/Pengarang/)).toHaveValue("")
    })
})