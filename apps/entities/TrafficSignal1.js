{
  "name": "TrafficSignal",
  "type": "object",
  "properties": {
    "signal_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "lat": {
      "type": "number"
    },
    "lng": {
      "type": "number"
    },
    "state": {
      "type": "string",
      "enum": [
        "red",
        "yellow",
        "green"
      ],
      "default": "red"
    },
    "controlled_by_request": {
      "type": "string",
      "description": "Emergency request ID controlling this signal"
    }
  },
  "required": [
    "signal_id",
    "lat",
    "lng"
  ]
}
