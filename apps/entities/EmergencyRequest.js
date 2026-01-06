{
  "name": "EmergencyRequest",
  "type": "object",
  "properties": {
    "hospital_id": {
      "type": "string"
    },
    "hospital_name": {
      "type": "string"
    },
    "hospital_type": {
      "type": "string",
      "enum": [
        "government",
        "private"
      ]
    },
    "driver_id": {
      "type": "string"
    },
    "driver_name": {
      "type": "string"
    },
    "ambulance_id": {
      "type": "string"
    },
    "emergency_type": {
      "type": "string",
      "enum": [
        "cardiac_arrest",
        "accident",
        "stroke",
        "critical_transfer",
        "other"
      ]
    },
    "priority_level": {
      "type": "number",
      "description": "1=Highest (Cardiac), 5=Lowest. Auto-set based on emergency type"
    },
    "patient_name": {
      "type": "string"
    },
    "patient_age": {
      "type": "number"
    },
    "patient_condition": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "approved",
        "in_progress",
        "completed",
        "rejected"
      ],
      "default": "pending"
    },
    "start_lat": {
      "type": "number"
    },
    "start_lng": {
      "type": "number"
    },
    "destination_lat": {
      "type": "number"
    },
    "destination_lng": {
      "type": "number"
    },
    "destination_name": {
      "type": "string"
    },
    "corridor_active": {
      "type": "boolean",
      "default": false
    },
    "notes": {
      "type": "string"
    }
  },
  "required": [
    "hospital_id",
    "emergency_type"
  ]
}
