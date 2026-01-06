{
  "name": "Notification",
  "type": "object",
  "properties": {
    "recipient_id": {
      "type": "string",
      "description": "Driver or Hospital ID"
    },
    "recipient_type": {
      "type": "string",
      "enum": [
        "driver",
        "hospital",
        "authority"
      ]
    },
    "title": {
      "type": "string"
    },
    "message": {
      "type": "string"
    },
    "type": {
      "type": "string",
      "enum": [
        "assignment",
        "approval",
        "alert",
        "info"
      ]
    },
    "request_id": {
      "type": "string"
    },
    "is_read": {
      "type": "boolean",
      "default": false
    }
  },
  "required": [
    "recipient_id",
    "title",
    "message"
  ]
}
