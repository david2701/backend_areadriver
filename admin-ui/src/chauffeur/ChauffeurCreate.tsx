import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ChauffeurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
