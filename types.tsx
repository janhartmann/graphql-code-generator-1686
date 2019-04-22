export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CanErrorEvent = {
  id?: Maybe<Scalars["String"]>;
  canErrorId?: Maybe<Scalars["String"]>;
  suspectParameterNumber?: Maybe<Scalars["Int"]>;
  failureModeIdentifier?: Maybe<Scalars["Int"]>;
  canbusNumber?: Maybe<Scalars["Int"]>;
  sourceAddress?: Maybe<Scalars["Int"]>;
  unitId?: Maybe<Scalars["Int"]>;
};

export type DamageReportEvent = {
  state?: Maybe<Scalars["Int"]>;
};

export type Machine = {
  id: Scalars["Int"];
  unit?: Maybe<Unit>;
};

export type PrecheckEvent = {
  count?: Maybe<Scalars["Int"]>;
  failedCount?: Maybe<Scalars["Int"]>;
};

export type Query = {
  machine?: Maybe<Machine>;
};

export type ServiceCalendarEvent = {
  date?: Maybe<Scalars["String"]>;
};

export type ServiceHourEvent = {
  serviceRun?: Maybe<Scalars["Int"]>;
  currentRun?: Maybe<Scalars["Int"]>;
};

export type ServiceKmEvent = {
  serviceKm?: Maybe<Scalars["Int"]>;
  currentKm?: Maybe<Scalars["Int"]>;
};

export type Unit = {
  id: Scalars["Int"];
  events?: Maybe<Array<UnitEvent>>;
};

export type UnitEventsArgs = {
  active: Scalars["Boolean"];
};

export type UnitEvent = {
  id: Scalars["String"];
  details?: Maybe<UnitEventDetails>;
};

export type UnitEventDetails =
  | DamageReportEvent
  | CanErrorEvent
  | PrecheckEvent
  | ServiceCalendarEvent
  | ServiceHourEvent
  | ServiceKmEvent;

export enum UnitEventType {
  DamageReport = "DAMAGE_REPORT",
  PreCheck = "PRE_CHECK",
  ServiceKm = "SERVICE_KM",
  ServiceHour = "SERVICE_HOUR",
  ServiceHour2 = "SERVICE_HOUR2",
  ServiceCalendar = "SERVICE_CALENDAR",
  CanError = "CAN_ERROR",
  Unknown = "UNKNOWN"
}
export type GetMachineActiveEventsQueryVariables = {};

export type GetMachineActiveEventsQuery = { __typename?: "Query" } & {
  machine: Maybe<
    { __typename?: "Machine" } & Pick<Machine, "id"> & {
        unit: Maybe<
          { __typename?: "Unit" } & Pick<Unit, "id"> & {
              events: Maybe<
                Array<
                  { __typename?: "UnitEvent" } & {
                    details: Maybe<

                        | ({ __typename?: "CanErrorEvent" } & Pick<
                            CanErrorEvent,
                            "suspectParameterNumber"
                          >)
                        | ({ __typename?: "DamageReportEvent" } & Pick<
                            DamageReportEvent,
                            "state"
                          >)
                        | ({ __typename?: "PrecheckEvent" } & Pick<
                            PrecheckEvent,
                            "count" | "failedCount"
                          >)
                        | ({ __typename?: "ServiceKmEvent" } & Pick<
                            ServiceKmEvent,
                            "serviceKm" | "currentKm"
                          >)
                        | ({ __typename?: "ServiceHourEvent" } & Pick<
                            ServiceHourEvent,
                            "serviceRun" | "currentRun"
                          >)
                        | ({ __typename?: "ServiceCalendarEvent" } & Pick<
                            ServiceCalendarEvent,
                            "date"
                          >)
                    >;
                  }
                >
              >;
            }
        >;
      }
  >;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const GetMachineActiveEventsDocument = gql`
  query GetMachineActiveEvents {
    machine {
      id
      unit {
        id
        events(active: true) {
          details {
            ... on CanErrorEvent {
              suspectParameterNumber
            }
            ... on DamageReportEvent {
              state
            }
            ... on PrecheckEvent {
              count
              failedCount
            }
            ... on ServiceKmEvent {
              serviceKm
              currentKm
            }
            ... on ServiceHourEvent {
              serviceRun
              currentRun
            }
            ... on ServiceCalendarEvent {
              date
            }
          }
        }
      }
    }
  }
`;

export const GetMachineActiveEventsComponent = (
  props: Omit<
    Omit<
      ReactApollo.QueryProps<
        GetMachineActiveEventsQuery,
        GetMachineActiveEventsQueryVariables
      >,
      "query"
    >,
    "variables"
  > & { variables?: GetMachineActiveEventsQueryVariables }
) => (
  <ReactApollo.Query<
    GetMachineActiveEventsQuery,
    GetMachineActiveEventsQueryVariables
  >
    query={GetMachineActiveEventsDocument}
    {...props}
  />
);

export type GetMachineActiveEventsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GetMachineActiveEventsQuery,
    GetMachineActiveEventsQueryVariables
  >
> &
  TChildProps;
export function withGetMachineActiveEvents<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetMachineActiveEventsQuery,
    GetMachineActiveEventsQueryVariables,
    GetMachineActiveEventsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetMachineActiveEventsQuery,
    GetMachineActiveEventsQueryVariables,
    GetMachineActiveEventsProps<TChildProps>
  >(GetMachineActiveEventsDocument, operationOptions);
}
export namespace GetMachineActiveEvents {
  export type Variables = GetMachineActiveEventsQueryVariables;
  export type Query = GetMachineActiveEventsQuery;
  export type Machine = GetMachineActiveEventsQuery["machine"];
  export type Unit = GetMachineActiveEventsQuery["machine"]["unit"];
  export type Events = GetMachineActiveEventsQuery["machine"]["unit"]["events"][0];
  export type Props = GetMachineActiveEventsProps;
  export const Document = GetMachineActiveEventsDocument;
  export const HOC = withGetMachineActiveEvents;
  export const Component = GetMachineActiveEventsComponent;
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: "UNION",
        name: "UnitEventDetails",
        possibleTypes: [
          {
            name: "DamageReportEvent"
          },
          {
            name: "CanErrorEvent"
          },
          {
            name: "PrecheckEvent"
          },
          {
            name: "ServiceCalendarEvent"
          },
          {
            name: "ServiceHourEvent"
          },
          {
            name: "ServiceKmEvent"
          }
        ]
      }
    ]
  }
};

export default result;
