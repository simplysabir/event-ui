export type EventNew = {
  "address": "Cqf3nHT8dkRBbJBPMJRa8RLTBfwcdHNijoDDqd95dwPV",
  "metadata": {
    "name": "eventNew",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addAttendee",
      "discriminator": [
        86,
        83,
        165,
        71,
        253,
        149,
        58,
        249
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "initializeEvent",
      "discriminator": [
        126,
        249,
        86,
        221,
        202,
        171,
        134,
        20
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  110,
                  101,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "eventName"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "eventName",
          "type": "string"
        },
        {
          "name": "date",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateEvent",
      "discriminator": [
        70,
        108,
        211,
        125,
        171,
        176,
        25,
        217
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "newDate",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "event",
      "discriminator": [
        125,
        192,
        125,
        158,
        9,
        115,
        152,
        233
      ]
    }
  ],
  "types": [
    {
      "name": "event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "date",
            "type": "i64"
          },
          {
            "name": "attendees",
            "type": "u32"
          }
        ]
      }
    }
  ]
};

export const IDL = {
  "address": "Cqf3nHT8dkRBbJBPMJRa8RLTBfwcdHNijoDDqd95dwPV",
  "metadata": {
    "name": "event_new",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "add_attendee",
      "discriminator": [
        86,
        83,
        165,
        71,
        253,
        149,
        58,
        249
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "initialize_event",
      "discriminator": [
        126,
        249,
        86,
        221,
        202,
        171,
        134,
        20
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  110,
                  101,
                  119
                ]
              },
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "arg",
                "path": "event_name"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "system_program",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "event_name",
          "type": "string"
        },
        {
          "name": "date",
          "type": "i64"
        }
      ]
    },
    {
      "name": "update_event",
      "discriminator": [
        70,
        108,
        211,
        125,
        171,
        176,
        25,
        217
      ],
      "accounts": [
        {
          "name": "event",
          "writable": true
        },
        {
          "name": "user",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "new_date",
          "type": "i64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "Event",
      "discriminator": [
        125,
        192,
        125,
        158,
        9,
        115,
        152,
        233
      ]
    }
  ],
  "types": [
    {
      "name": "Event",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "date",
            "type": "i64"
          },
          {
            "name": "attendees",
            "type": "u32"
          }
        ]
      }
    }
  ]
}