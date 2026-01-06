{
  "name": "CorridorLog",
  "type": "object",
  "properties": {
    "request_id": {
      "type": "string"
    },
    "hospital_name": {
      "type": "string"
    },
    "driver_name": {
      "type": "string"
    },
    "emergency_type": {
      "type": "string"
    },
    "start_time": {
      "type": "string",
      "format": "date-time"
    },
    "end_time": {
      "type": "string",
      "format": "date-time"
    },
    "duration_minutes": {
      "type": "number"
    },
    "signals_controlled": {
      "type": "number"
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "completed",
        "cancelled"
      ]
    }
  },
  "required": [
    "request_id"
  ]
}
