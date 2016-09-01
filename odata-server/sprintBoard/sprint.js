require('odata-server');

$data.Entity.extend("sprint", {
    Client:               { key: true, type: Edm.Int16, required: true, maxLength: 6 },
    SprintId:             { key: true, type: String,    required: true, maxLength: 25 },
    DescriptionMedium:    { key: false,type: String,    required: true, maxLength: 50 },
    SprintAgent:      [{
                      Client:           { key: true,  type: Edm.Int16,    required: true, maxLength: 6 },
                      SprintId:         { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                      AgentID:          { key: true,  type: Edm.Int16,    required: true, maxLength: 6 },
                      PlannCapa:        { key: false, type: Edm.decimal,  required: true },
                      }],
  
    SprintTask:       [{
                      Client:           { key: true,  type: Edm.Int16,    required: true, maxLength: 6 },
                      SprintId:         { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                      SprintTaskId:     { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                      
                      ProjectId:        { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                      BackLogId:        { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                      TaskID:           { key: true,  type: Edm.Int16,    required: true, maxLength: 6 },

                      Status:           { key: false, type: Edm.String,   required: true, maxLength: 3 },
                      DoneDate:         { key: false, type: Edm.DateTime, required: true },
                      Daily:            [{
                                        Client:           { key: true,  type: Edm.Int16,    required: true, maxLength: 6 },
                                        SprintId:         { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                                        SprintTaskId:     { key: true,  type: Edm.String,   required: true, maxLength: 25 },
                                        DailyDate:        { key: false, type: Edm.DateTime, required: true },
                                        
                        
                                        }]
                      }]
});

$data.EntityContext.extend("SBoardDatabase", {
    Todos: { type: $data.EntitySet, elementType: project }
});

$data.createODataServer(SBoardDatabase, '/sprintBoard', 52999, 'localhost');
