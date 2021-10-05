import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChauffeurTitle } from "./ChauffeurTitle";

export const ChauffeurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chauffeur.id"
          reference="Chauffeur"
          label="Chauffeur"
        >
          <SelectInput optionText={ChauffeurTitle} />
        </ReferenceInput>
        <TextInput label="Modèle de voiture" source="modLeDeVoiture" />
        <TextInput label="Nom du chauffeur" source="nomDuChauffeur" />
        <TextInput
          label="Plaque d'immatriculation"
          source="plaqueDImmatriculation"
        />
      </SimpleForm>
    </Create>
  );
};
