import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChauffeurTitle } from "./ChauffeurTitle";

export const ChauffeurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
