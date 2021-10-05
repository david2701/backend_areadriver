import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Arrivée" source="arrivE" />
        <TextInput
          label="Commentaires Supplémentaires"
          multiline
          source="commentairesSupplMentaires"
        />
        <TextInput label="Départ" source="dPart" />
        <NumberInput
          step={1}
          label="Nombre de personnes"
          source="nombreDePersonnes"
        />
        <NumberInput step={1} label="Nom du client" source="nomDuClient" />
        <DateTimeInput label="Quand" source="quand" />
        <TextInput label="Vol" source="vol" />
      </SimpleForm>
    </Create>
  );
};
