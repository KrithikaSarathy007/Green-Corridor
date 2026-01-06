{
  "name": "Hospital",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Hospital name"
    },
    "type": {
      "type": "string",
      "enum": [
        "government",
        "private"
      ],
      "description": "Hospital type"
    },
    "is_approved": {
      "type": "boolean",
      "default": false,
      "description": "Whether private hospital is approved by authority"
    },
    "address": {
      "type": "string"
    },
    "contact": {
      "type": "string"
    },
    "lat": {
      "type": "number"
    },
    "lng": {
      "type": "number"
    },
    "corridor_access_count": {
      "type": "number",
      "default": 0
    },
    "username": {
      "type": "string"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "name",
    "type",
    "username",
    "password"
  ]
}
