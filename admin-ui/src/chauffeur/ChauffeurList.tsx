import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHAUFFEUR_TITLE_FIELD } from "./ChauffeurTitle";

export const ChauffeurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Chauffeur assigné"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Chauffeur"
          source="chauffeur.id"
          reference="Chauffeur"
        >
          <TextField source={CHAUFFEUR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Modèle de voiture" source="modLeDeVoiture" />
        <TextField label="Nom du chauffeur" source="nomDuChauffeur" />
        <TextField
          label="Plaque d'immatriculation"
          source="plaqueDImmatriculation"
        />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
