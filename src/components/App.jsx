import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box, Title } from './Common';
import { Container } from './Container';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  contactFormSubmit = data => {
    const { name, number } = data;
    const id = nanoid();
    this.setState(
      prev => (prev.contacts = [...prev.contacts, { id, name, number }])
    );
  };

  render() {
    return (
      <Container>
        <Box
          mx="auto"
          width="half"
          border="medium"
          borderRadius="normal"
          px={4}
          py={5}
          borderColor="blue"
          boxShadow="phoneBook"
          backgroundColor="autumnOrange.cotton"
        >
          <Title mb={4} color="blue">
            Phonebook
          </Title>
          <ContactForm onSubmit={this.contactFormSubmit} />

          <Title as="h2" mb={4} color="blue">
            Contacts
          </Title>
          <Filter />
          <ContactList />
        </Box>
      </Container>
    );
  }
}
