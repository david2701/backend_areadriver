import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHAUFFEUR_TITLE_FIELD } from "../chauffeur/ChauffeurTitle";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Arrivée" source="arrivE" />
        <TextField
          label="Commentaires Supplémentaires"
          source="commentairesSupplMentaires"
        />
        <ReferenceField
          label="Conducteur assigné"
          source="chauffeur.id"
          reference="Chauffeur"
        >
          <TextField source={CHAUFFEUR_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Départ" source="dPart" />
        <TextField label="ID" source="id" />
        <TextField label="Nombre de personnes" source="nombreDePersonnes" />
        <TextField label="Nom du client" source="nomDuClient" />
        <TextField label="Quand" source="quand" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Vol" source="vol" />
      </Datagrid>
    </List>
  );
};
