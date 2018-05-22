/* tslint:disable */

declare var Object: any;
export interface MessageInterface {
  "type": number;
  "hidden"?: boolean;
  "content": string;
  "expires"?: Date;
  "id"?: number;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Message implements MessageInterface {
  "type": number;
  "hidden": boolean;
  "content": string;
  "expires": Date;
  "id": number;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: MessageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Message`.
   */
  public static getModelName() {
    return "Message";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Message for dynamic purposes.
  **/
  public static factory(data: MessageInterface): Message{
    return new Message(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Message',
      plural: 'messages',
      path: 'messages',
      idName: 'id',
      properties: {
        "type": {
          name: 'type',
          type: 'number'
        },
        "hidden": {
          name: 'hidden',
          type: 'boolean',
          default: false
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "expires": {
          name: 'expires',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
