'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('UsAppToPerson', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {
        brandRegistrationSid: 'BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'description',
        messageSamples: ['message_samples'],
        usAppToPersonUsecase: 'us_app_to_person_usecase',
        hasEmbeddedLinks: true,
        hasEmbeddedPhone: true
      };
      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var messagingServiceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${messagingServiceSid}/Compliance/Usa2p`;

      var values = {
        BrandRegistrationSid: 'BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        Description: 'description',
        MessageSamples: serialize.map(['message_samples'], function(e) { return e; }),
        UsAppToPersonUsecase: 'us_app_to_person_usecase',
        HasEmbeddedLinks: serialize.bool(true),
        HasEmbeddedPhone: serialize.bool(true),
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'QE2c6890da8086d771620e9b13fadeba0b',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'brand_registration_sid': 'BNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'description': 'Send marketing messages about sales to opted in customers.',
          'message_samples': [
              'EXPRESS: Denim Days Event is ON',
              'LAST CHANCE: Book your next flight for just 1 (ONE) EUR'
          ],
          'us_app_to_person_usecase': 'MARKETING',
          'has_embedded_links': true,
          'has_embedded_phone': false,
          'campaign_status': 'PENDING',
          'campaign_id': 'CXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'is_externally_registered': false,
          'rate_limits': {
              'att': {
                  'mps': 600,
                  'msg_class': 'A'
              },
              'tmobile': {
                  'brand_tier': 'TOP'
              }
          },
          'date_created': '2021-02-18T14:48:52Z',
          'date_updated': '2021-02-18T14:48:52Z',
          'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p/QE2c6890da8086d771620e9b13fadeba0b',
          'mock': false
      };

      holodeck.mock(new Response(201, body));

      var opts = {
        brandRegistrationSid: 'BNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        description: 'description',
        messageSamples: ['message_samples'],
        usAppToPersonUsecase: 'us_app_to_person_usecase',
        hasEmbeddedLinks: true,
        hasEmbeddedPhone: true
      };
      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson('QEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var messagingServiceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'QEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${messagingServiceSid}/Compliance/Usa2p/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson('QEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'compliance': [
              {
                  'sid': 'QE2c6890da8086d771620e9b13fadeba0b',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'brand_registration_sid': 'BNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'description': 'Send marketing messages about sales to opted in customers.',
                  'message_samples': [
                      'EXPRESS: Denim Days Event is ON',
                      'LAST CHANCE: Book your next flight for just 1 (ONE) EUR'
                  ],
                  'us_app_to_person_usecase': 'MARKETING',
                  'has_embedded_links': true,
                  'has_embedded_phone': false,
                  'campaign_status': 'PENDING',
                  'campaign_id': 'CXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'is_externally_registered': false,
                  'rate_limits': {
                      'att': {
                          'mps': 600,
                          'msg_class': 'A'
                      },
                      'tmobile': {
                          'brand_tier': 'TOP'
                      }
                  },
                  'date_created': '2021-02-18T14:48:52Z',
                  'date_updated': '2021-02-18T14:48:52Z',
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p/QE2c6890da8086d771620e9b13fadeba0b',
                  'mock': false
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'key': 'compliance'
          }
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .usAppToPerson.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'compliance': [
              {
                  'sid': 'QE2c6890da8086d771620e9b13fadeba0b',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'brand_registration_sid': 'BNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'description': 'Send marketing messages about sales to opted in customers.',
                  'message_samples': [
                      'EXPRESS: Denim Days Event is ON',
                      'LAST CHANCE: Book your next flight for just 1 (ONE) EUR'
                  ],
                  'us_app_to_person_usecase': 'MARKETING',
                  'has_embedded_links': true,
                  'has_embedded_phone': false,
                  'campaign_status': 'PENDING',
                  'campaign_id': 'CXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'is_externally_registered': false,
                  'rate_limits': {
                      'att': {
                          'mps': 600,
                          'msg_class': 'A'
                      },
                      'tmobile': {
                          'brand_tier': 'TOP'
                      }
                  },
                  'date_created': '2021-02-18T14:48:52Z',
                  'date_updated': '2021-02-18T14:48:52Z',
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p/QE2c6890da8086d771620e9b13fadeba0b',
                  'mock': false
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'key': 'compliance'
          }
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .usAppToPerson.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://messaging.twilio.com/v1/Services/${messagingServiceSid}/Compliance/Usa2p',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'compliance': [
              {
                  'sid': 'QE2c6890da8086d771620e9b13fadeba0b',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'brand_registration_sid': 'BNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'description': 'Send marketing messages about sales to opted in customers.',
                  'message_samples': [
                      'EXPRESS: Denim Days Event is ON',
                      'LAST CHANCE: Book your next flight for just 1 (ONE) EUR'
                  ],
                  'us_app_to_person_usecase': 'MARKETING',
                  'has_embedded_links': true,
                  'has_embedded_phone': false,
                  'campaign_status': 'PENDING',
                  'campaign_id': 'CXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'is_externally_registered': false,
                  'rate_limits': {
                      'att': {
                          'mps': 600,
                          'msg_class': 'A'
                      },
                      'tmobile': {
                          'brand_tier': 'TOP'
                      }
                  },
                  'date_created': '2021-02-18T14:48:52Z',
                  'date_updated': '2021-02-18T14:48:52Z',
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p/QE2c6890da8086d771620e9b13fadeba0b',
                  'mock': false
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'key': 'compliance'
          }
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                         .usAppToPerson.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var messagingServiceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${messagingServiceSid}/Compliance/Usa2p`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'compliance': [
              {
                  'sid': 'QE2c6890da8086d771620e9b13fadeba0b',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'brand_registration_sid': 'BNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'description': 'Send marketing messages about sales to opted in customers.',
                  'message_samples': [
                      'EXPRESS: Denim Days Event is ON',
                      'LAST CHANCE: Book your next flight for just 1 (ONE) EUR'
                  ],
                  'us_app_to_person_usecase': 'MARKETING',
                  'has_embedded_links': true,
                  'has_embedded_phone': false,
                  'campaign_status': 'PENDING',
                  'campaign_id': 'CXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'is_externally_registered': false,
                  'rate_limits': {
                      'att': {
                          'mps': 600,
                          'msg_class': 'A'
                      },
                      'tmobile': {
                          'brand_tier': 'TOP'
                      }
                  },
                  'date_created': '2021-02-18T14:48:52Z',
                  'date_updated': '2021-02-18T14:48:52Z',
                  'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p/QE2c6890da8086d771620e9b13fadeba0b',
                  'mock': false
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p?PageSize=50&Page=0',
              'key': 'compliance'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson('QEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var messagingServiceSid = 'MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'QEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://messaging.twilio.com/v1/Services/${messagingServiceSid}/Compliance/Usa2p/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'QE2c6890da8086d771620e9b13fadeba0b',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'brand_registration_sid': 'BNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'messaging_service_sid': 'MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'description': 'Send marketing messages about sales to opted in customers.',
          'message_samples': [
              'EXPRESS: Denim Days Event is ON',
              'LAST CHANCE: Book your next flight for just 1 (ONE) EUR'
          ],
          'us_app_to_person_usecase': 'MARKETING',
          'has_embedded_links': true,
          'has_embedded_phone': false,
          'campaign_status': 'PENDING',
          'campaign_id': 'CXaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'is_externally_registered': false,
          'rate_limits': {
              'att': {
                  'mps': 600,
                  'msg_class': 'A'
              },
              'tmobile': {
                  'brand_tier': 'TOP'
              }
          },
          'date_created': '2021-02-18T14:48:52Z',
          'date_updated': '2021-02-18T14:48:52Z',
          'url': 'https://messaging.twilio.com/v1/Services/MGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Compliance/Usa2p/QE2c6890da8086d771620e9b13fadeba0b',
          'mock': false
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.services('MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                       .usAppToPerson('QEXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
