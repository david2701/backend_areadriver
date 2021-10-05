import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { ChauffeurTitle } from "../chauffeur/ChauffeurTitle";

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
        <ReferenceInput
          source="chauffeur.id"
          reference="Chauffeur"
          label="Conducteur assigné"
        >
          <SelectInput optionText={ChauffeurTitle} />
        </ReferenceInput>
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
