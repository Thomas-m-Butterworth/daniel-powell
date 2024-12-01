import { Button } from "@components/ui";
import React from "react";
import styled from "styled-components";

const ContactFormContainer = styled.div<{width?: string;}>`
    display: flex;
    flex-direction: column;
    width: ${( props ) => (props.width ? props.width : "100%")};
    align-items: center;
    font-family: ${({ theme }) => theme.typography.fonts.primaryFont};
`;

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Form = styled.form`
    width: 100%;
`;

export const Label = styled.label`
`;

export const Input = styled.input`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    border-radius: ${({ theme }) => theme.borderRadii.medium};
    border: solid 1px;
    height: 1.75rem;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.textInverted};
`;

export const TextArea = styled.textarea`
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-left: 0.5rem;
    border-radius: ${({ theme }) => theme.borderRadii.medium};
    border: solid 1px;
    height: 7rem;
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.textInverted};
`;

interface FormDataType {
    name: string;
    email: string;
    message: string;
}

interface ContactFormProps {
    handleSubmit: (e) => void;
    handleChange: (e) => void;
    formData: FormDataType;
    status: string;
}

export const ContactForm = ({handleSubmit, handleChange, formData, status}: ContactFormProps) => {
    return (
        <ContactFormContainer>
            <Form onSubmit={handleSubmit}>
            <FormInput>
            <Label htmlFor="name">Name:</Label>
            <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            </FormInput>
            <FormInput>
            <Label htmlFor="email">Email:</Label>
            <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            </FormInput>
            <FormInput>
            <Label htmlFor="message">Message:</Label>
            <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></TextArea>
            </FormInput>
            <Button type="submit">Send Message</Button>
        </Form>

        <p>{status}</p>
        </ContactFormContainer>
    )
}