import React, { useEffect } from 'react';

declare global {
  interface Window {
    FlowluForm: any;
    leadforms_forms: any[];
    addStyleToPage?: () => void;
  }
}

export const ContactFormNew: React.FC = () => {
  useEffect(() => {
    // Initialize leadforms_forms array if it doesn't exist
    if (!window.leadforms_forms) {
      window.leadforms_forms = [];
    }

    // Add the form initialization function to the queue
    window.leadforms_forms.push(function(leadformsHost: string) {
      try {
        new window.FlowluForm.init({
          id: '78231',
          token: '592e7989112f8c87fc66036f187ff628',
          host: leadformsHost
        });
      } catch (e) {
        console.error('FlowluForm initialization error:', e);
      }
    });

    // Load the external script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://bi.aspro.ru/application/classes/Module/Webforms/static/js/ext-form.js?v=${Date.now()}`;
    
    script.onload = function() {
      console.log('FlowluForm script loaded successfully');
      
      // Remove existing leadformscss link if it exists
      const existingLink = document.getElementById('leadformscss');
      if (existingLink) {
        existingLink.remove();
      }
      
      if (typeof window.addStyleToPage === 'function') {
        (window as any).addStyleToPage();
      }
    };

    script.onerror = function() {
      console.error('Failed to load FlowluForm script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
  return (
    <section id="contact-form" className="items-stretch flex w-[858px] max-w-full flex-col gap-12">
      <div className="w-full text-center gap-5 max-md:max-w-full">
        <div className="flex w-full flex-col text-[32px] text-[#333338] font-semibold leading-none gap-3 max-md:max-w-full">
          <h2 className="text-[#333338] max-md:max-w-full">
            Станьте одним из первых
          </h2>
        </div>
        <div className="flex w-full items-center gap-2.5 text-base text-[#555558] font-normal leading-[26px] justify-center mt-5 max-md:max-w-full">
          <p className="text-[#555558] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            Присоединяйтесь к листу ожидания и получите возможность протестировать Аспро.ИИ до официального запуска
          </p>
        </div>
      </div>
      
      <div className="self-center">
        <form className="leadforms-form">
          <input type="hidden" name="pipeline_id" value="27"/>
          <input type="hidden" id="leadforms_host" value="https://bi.aspro.ru/"/>
          <input type="hidden" name="name" value="Веб-форма "/>
          <div className="leadforms-row">
            <div className="form__input--fragment form__input-group form__input-group--text ">
              <label className="leadforms-label form__label" htmlFor="leadforms_contact_name">
                Ваше имя
              </label>
              <input 
                type="text" 
                required 
                id="leadforms_contact_name" 
                name="contact_name" 
                className="leadforms-input form__control" 
              />
            </div>
          </div>
          
          <div className="leadforms-row">
            <div className="form__input--fragment form__input-group form__input-group--text ">
              <label className="leadforms-label form__label" htmlFor="leadforms_contact_email">
                Email
              </label>
              <input 
                type="email" 
                required 
                id="leadforms_contact_email" 
                name="contact_email" 
                className="leadforms-input form__control" 
              />
            </div>
          </div>
          
          <div className="leadforms-row">
            <div className="form__input--fragment form__input-group form__input-group--text ">
              <label className="leadforms-label form__label" htmlFor="leadforms_contact_company">
                Компания
              </label>
              <input 
                type="text" 
                id="leadforms_contact_company" 
                name="contact_company" 
                className="leadforms-input form__control" 
              />
            </div>
          </div>
          
          <div className="leadforms-row">
            <div className="form__input--fragment form__input-group form__input-group--textarea ">
              <label className="leadforms-label form__label" htmlFor="leadforms_description">
                Комментарий
              </label>
              <textarea 
                id="leadforms_description" 
                name="description" 
                className="leadforms-input form__control" 
                rows={3}
              ></textarea>
            </div>
          </div>          
          <div className="leadforms-row leadforms-checkbox-block">
            <div className="form__input--fragment form__input-group form__input-group--checkbox ">
              <div className="form-checkbox form-checkbox--color-primary" data-set-unique-id="">
                <input type="checkbox" id="leadforms_privacy" required name="leadforms_privacy" value="ok" className="form__control form-input-box__input form-checkbox__input leadforms-form-input-privacy" />
                <label className="form-input__label form__label leadforms-label" htmlFor="leadforms_privacy" id="leadforms_privacy_label">
                  Я согласен на обработку персональных данных
                </label>
              </div>
            </div>
          </div>
          
          <div className="leadforms-notification"></div>
          
          <style>{`
            .leadforms-row-submit { 
              text-align: center; 
            }
            .leadforms-form {
              margin: 30px auto 15px;
              border-radius: 20px;
              border: 1px solid #E6E9F2;
              padding: 48px 48px 48px;
              position: relative;
              display: block;
              box-sizing: border-box;
              width: 642px;
              max-width: 100%;
              background: #ffffff;
            }
            .flow-img { 
              width: 100%; 
              margin: 0 0 0 -62px; 
              z-index: 4; 
              position: absolute; 
              top: -48px; 
              text-align: center; 
            }
            .leadforms-form input.leadforms-input { 
              height: 48px;
              border: 1px solid #E6E9F2;
              background: #F5F7FC;
              border-radius: 8px;
              padding: 11px 12px;
              width: 100%;
              font-size: 13px;
              color: #333338;
            }
            .leadforms-form textarea.leadforms-input {
              resize: none;
              border: 1px solid #E6E9F2;
              background: #F5F7FC;
              border-radius: 8px;
              padding: 11px 12px;
              width: 100%;
              font-size: 13px;
              color: #333338;
            }
            .leadforms-form .leadforms-form-title { 
              color: #333; 
              padding-bottom: 22px; 
              font-size: 32px;
              font-weight: 600;
              text-align: center;
              margin-bottom: 24px;
            }
            .leadforms-label {
              color: #333338;
              font-size: 13px;
              margin-bottom: 4px;
              display: block;
            }
            .leadforms-row {
              margin-bottom: 16px;
            }
            .leadforms-submit {
              background: #3761E9;
              color: white;
              border: none;
              border-radius: 8px;
              padding: 11px 20px;
              font-size: 16px;
              font-weight: 600;
              cursor: pointer;
              width: 100%;
              margin-top: 24px;
            }
            .leadforms-submit:hover {
              background: #2951d3;
            }
            .form-checkbox {
              display: flex;
              align-items: flex-start;
              gap: 8px;
            }
            .form-checkbox__input {
              width: auto !important;
              height: auto !important;
              margin: 0;
            }
            .form-checkbox__box {
              width: 18px;
              height: 18px;
              border: 1px solid #E6E9F2;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              margin-top: 2px;
            }
            .form-checkbox__check {
              display: none;
            }
            .form-checkbox__input:checked + label + .form-checkbox__box .form-checkbox__check {
              display: block;
            }
            .form-checkbox__input:checked + label + .form-checkbox__box {
              background: #3761E9;
              border-color: #3761E9;
            }
            .leadforms-checkbox-block {
              margin-top: 16px;
              margin-bottom: 24px;
            }
            @media (max-width: 768px) {
              .leadforms-form {
                width: 100%;
                padding: 20px;
                margin: 20px auto 15px;
              }
            }
          `}</style>
          
          <div className="leadforms-row leadforms-row-submit">
            <button type="submit" className="leadforms-submit leadforms-btn leadforms-btn-primary">
              Присоединиться
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};