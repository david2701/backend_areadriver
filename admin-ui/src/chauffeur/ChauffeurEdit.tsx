import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ChauffeurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
